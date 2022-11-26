import { FC } from 'react'

import { Button } from '@/components/atoms'
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

const SubmitButton: FC<Props> = ({
  isEdit,
  control,
  defaultValues,
  watchIsPublished,
  checkUnClickable,
}) => {
  return (
    <div className='my-4 flex'>
      <SwitchGroup
        name='isPublished'
        label={isEdit ? '公開中' : '公開する'}
        control={control}
        defaultValue={defaultValues.isPublished}
        disabled={isEdit}
      />
      <div className='ml-4'>
        {watchIsPublished ? (
          <Button
            name='投稿する'
            type='submit'
            disabled={isEdit || checkUnClickable()}
          />
        ) : (
          <Button
            name='下書き保存'
            type='submit'
            disabled={isEdit || checkUnClickable()}
          />
        )}
      </div>
    </div>
  )
}

export default SubmitButton
