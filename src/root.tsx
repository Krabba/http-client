import { useQuery } from '@tanstack/react-query'

async function queryFn(): Promise<{ message: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = {
        message: 'From example',
      }

      resolve(result)
    }, 1000)
  })
}

export const Root = () => {
  const { data, isLoading } = useQuery({ queryKey: ['example'], queryFn })

  return (
    <div className='bg-fuchsia-500 p-4 font-bold'>
      <span>Tailwind now works properly</span>
      {isLoading ? <div>Loading...</div> : <div>{data?.message}</div>}
    </div>
  )
}
