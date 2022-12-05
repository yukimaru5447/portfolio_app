import { FC } from 'react'
import { Box, Button } from '@mui/material'

import SwitchGroup from '@/components/organisms/SwitchGroup'
import { Control } from 'react-hook-form'

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
    <Box sx={{ marginY: 2, display: 'flex' }}>
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
    </Box>
  )
}

export default SubmitField
