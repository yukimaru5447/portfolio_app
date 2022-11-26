import { FC } from 'react'

const SubmitButton: FC = () => {
  // localStorageに保存?
  // それともuseFormを利用できるか
  return (
    <div className='my-4 flex'>
      送信ボタン
      {/* <SwitchGroup
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
      </div> */}
    </div>
  )
}

export default SubmitButton
