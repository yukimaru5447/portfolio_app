import { trpc } from '@/utils/trpc'

const useHooks = ({ userId }: { userId: string }) => {
  const { data: profile } = trpc.profile.getProfileByUserId.useQuery({
    userId,
  })
  const { data: education } = trpc.education.getAlllEducationByUserId.useQuery({
    userId,
  })
  const { data: experience } =
    trpc.experience.getAlllExperienceByUserId.useQuery({
      userId,
    })

  return { profile, education, experience }
}
export default useHooks
