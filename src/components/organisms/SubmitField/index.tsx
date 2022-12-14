import { FC } from 'react'
import { Box, Button } from '@mui/material'
import { styled } from '@mui/system'

import SwitchGroup from '@/components/organisms/SwitchGroup'
import { Control } from 'react-hook-form'

const StyledSubmitField = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
}))

type Props = {
  isEdit: boolean
  watchIsPublished: boolean
  control: Control<any>
  defaultValues: {
    isPublished: boolean
  }
  checkUnClickable: () => boolean
}

const SubmitField: FC<Props> = ({
  isEdit,
  control,
  defaultValues,
  watchIsPublished,
  checkUnClickable,
}) => {
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
