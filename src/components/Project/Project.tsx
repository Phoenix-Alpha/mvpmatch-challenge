import { FC, memo } from 'react'

import { PaymentDataGrid } from '@/components'
import { useProject } from '@/hooks'
import { IProjectCentric } from '@/types'

export interface IProjectProps {
  projectCentric: IProjectCentric
}

export const Project: FC<IProjectProps> = memo(
  ({ projectCentric }: IProjectProps) => {
    const { totalFormatted, expanded, handleClick } = useProject(projectCentric)

    return (
      <div className='w-full'>
        <div
          className='bg-white p-6 text-[#011F4B] text-base font-bold rounded-lg cursor-pointer select-none z-10 mb-4 flex flex-row items-center justify-between'
          onClick={handleClick}
        >
          <span>{projectCentric.project.name}</span>
          <span>TOTAL: {totalFormatted}</span>
        </div>
        {expanded && <PaymentDataGrid payments={projectCentric.payments} />}
      </div>
    )
  }
)

Project.displayName = 'Project'

export default Project
