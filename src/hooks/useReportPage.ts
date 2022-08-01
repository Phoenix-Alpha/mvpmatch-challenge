import { ChangeEvent, useCallback, useMemo, useState } from 'react'

import { useGetGateways, useGetPayments, useGetProjects } from '@/hooks'
import { IGateway, IPayment, IProject, IReportRequest } from '@/types'
import {
  formatDatetime,
  formatDollar,
  getGatewayCentrics,
  getProjectCentrics
} from '@/utils'

export const useReportPage = () => {
  const [project, setProject] = useState<IProject | undefined>(undefined)
  const [gateway, setGateway] = useState<IGateway | undefined>(undefined)
  const [fromDate, setFromDate] = useState<Date | undefined>(undefined)
  const [toDate, setToDate] = useState<Date | undefined>(undefined)
  const [showReport, setShowReport] = useState<boolean>(false)

  const projects: IProject[] = useGetProjects()
  const gateways: IGateway[] = useGetGateways()

  const payments: IPayment[] = useMemo(() => {
    const request: IReportRequest = {
      projectId: project?.projectId,
      gatewayId: gateway?.gatewayId,
      from: formatDatetime(fromDate) ?? undefined,
      to: formatDatetime(toDate) ?? undefined
    }
    return useGetPayments(request)
  }, [project, gateway, fromDate, toDate])

  const projectTitle = useMemo(
    () => (project ? project.name : 'All projects'),
    [project]
  )
  const gatewayTitle = useMemo(
    () => (gateway ? gateway.name : 'All gateways'),
    [gateway]
  )

  const title = useMemo(() => `${projectTitle} | ${gatewayTitle}`, [
    projectTitle,
    gatewayTitle
  ])

  const total = useMemo(() => {
    let sum = 0
    payments.forEach(item => {
      sum += item.amount
    })
    return sum
  }, [payments])

  const totalFormatted = useMemo(() => formatDollar(total), [total])

  const isEmpty = useMemo(() => payments.length === 0, [payments])

  const mode = useMemo(
    () =>
      project
        ? gateway
          ? 'payment-centric'
          : 'gateway-centric'
        : 'project-centric',
    [project, gateway]
  )

  const projectCentrics = useMemo(() => {
    return getProjectCentrics(projects, payments)
  }, [projects, payments])

  const gatewayCentrics = useMemo(() => {
    console.log(getGatewayCentrics(gateways, payments))
    return getGatewayCentrics(gateways, payments)
  }, [gateways, payments])

  const handleChangeProject = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const projectId = event?.currentTarget?.value
      const newProject = projects.find(item => item.projectId === projectId)
      setProject(newProject)
    },
    [setProject, projects]
  )

  const handleChangeGateway = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const gatewayId = event?.currentTarget?.value
      const newGateway = gateways.find(item => item.gatewayId === gatewayId)
      setGateway(newGateway)
    },
    [setGateway, gateways]
  )

  const handleChangeFromDate = useCallback(
    (newValue: Date | null) => {
      setFromDate(newValue ?? undefined)
    },
    [setFromDate]
  )

  const handleChangeToDate = useCallback(
    (newValue: Date | null) => {
      setToDate(newValue ?? undefined)
    },
    [setToDate]
  )

  const handleClickGenerateReport = useCallback(() => {
    setShowReport(!showReport)
    console.log('Generating report!')
  }, [])

  return {
    mode,
    title,
    total,
    totalFormatted,
    projects,
    gateways,
    payments,
    project,
    setProject,
    gateway,
    setGateway,
    fromDate,
    setFromDate,
    toDate,
    setToDate,
    isEmpty,
    projectCentrics,
    gatewayCentrics,
    showReport,
    setShowReport,
    handleChangeProject,
    handleChangeGateway,
    handleChangeFromDate,
    handleChangeToDate,
    handleClickGenerateReport
  }
}
