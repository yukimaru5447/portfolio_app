import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'

import CustomTextField from '@/components/molucules/CustomTextField'
import ImageField from '@/components/organisms/ImageField'
import { DefaultValues } from '../PortfolioDetail/hooks'

const StyledPortfolioFormField = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}))
const StyledStack = styled(Stack)(({ theme }) => ({
  width: '66%',
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(2),
}))

type Props = {
  defaultValues: DefaultValues
  portfolio:
    | {
        title: string
        description: string
        serviceUrl: string
        githubUrl: string
        isPublished: boolean
      }
    | null
    | undefined
  isEdit: boolean
}

const PortfolioFormField: FC<Props> = ({
  defaultValues,
  portfolio,
  isEdit,
}) => {
  const { control } = useFormContext()
  return (
    <StyledPortfolioFormField>
      <StyledStack spacing={2}>
        {/* portfolio.imageが実装できたら変更 */}
        <ImageField />
        <CustomTextField
          name='title'
          control={control}
          defaultValue={portfolio ? portfolio?.title : defaultValues.title}
          readOnly={isEdit}
          placeholder={isEdit ? '' : 'タイトル（32文字以内）'}
        />
        <CustomTextField
          name='description'
          control={control}
          defaultValue={
            portfolio ? portfolio?.description : defaultValues.description
          }
          readOnly={isEdit}
          placeholder={
            isEdit
              ? ''
              : 'ポートフォリオの説明（マークダウン記法を使用できます）'
          }
          multiline
          minRows={4}
          inputProps={{ style: { padding: '16.5px 14px' } }}
        />
        <CustomTextField
          name='serviceUrl'
          control={control}
          defaultValue={
            portfolio ? portfolio?.serviceUrl : defaultValues.serviceUrl
          }
          label='URL'
          readOnly={isEdit}
          placeholder={isEdit ? '' : 'https://'}
        />
        <CustomTextField
          name='githubUrl'
          control={control}
          defaultValue={
            portfolio ? portfolio?.githubUrl : defaultValues.githubUrl
          }
          label='Github'
          readOnly={isEdit}
          placeholder={isEdit ? '' : 'https://'}
        />
      </StyledStack>
    </StyledPortfolioFormField>
  )
}

export default PortfolioFormField
