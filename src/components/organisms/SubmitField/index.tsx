import { FC } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import { useFormContext } from 'react-hook-form'

import SwitchGroup from '@/components/organisms/SwitchGroup'

const StyledSubmitField = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
}))

type Props = {
  isEdit: boolean
  watchIsPublished: boolean
  defaultValues: {
    isPublished: boolean
  }
  checkUnClickable: () => boolean
}

const SubmitField: FC<Props> = ({
  isEdit,
  defaultValues,
  watchIsPublished,
  checkUnClickable,
}) => {
  const { control } = useFormContext()
  return (
    <StyledSubmitField>
      <SwitchGroup
        name='isPublished'
        label={isEdit ? '公開中' : '公開する'}
        control={control}
        defaultValue={defaultValues.isPublished}
        disabled={isEdit}
      />

      <Button variant='contained' disabled={isEdit || checkUnClickable()}>
        {watchIsPublished ? '投稿する' : '下書き保存'}
      </Button>
    </StyledSubmitField>
  )
}

export default SubmitField
