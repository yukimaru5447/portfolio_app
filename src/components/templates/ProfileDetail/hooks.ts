import { trpc } from '@/utils/trpc'

const useHooks = ({ userId }: { userId: string }) => {
  const {
    data: profile,
    isLoading,
    error,
  } = trpc.profile.getProfileByUserId.useQuery({
    userId,
  })

  return { profile, isLoading, error }
}
export default useHooks
