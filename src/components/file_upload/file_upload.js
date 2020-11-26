import React, { Fragment, useState } from 'react'

const FileUpload = () => {
  const [file, setFile] = useState('')
  const [fileName, setFileName] = useState('Choose file')
  // const [uploadedFile, setUploadedFile] = useState({})

  const onChange = event => {
    setFile(event.target.files[0])
    setFileName(event.target.files[0].name)
  }

  const onSubmit = event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('file', file)

    fetch('http://127.0.0.1:5000/data', {
      method: 'PUT',
      body: formData
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success', result)
      })
      .catch(error => {
        console.error('Error: ', error)
      })
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input type="file" className="custom-file-input" id="customFile" accept=".txt" onChange={onChange}/>
          <label className="custom-file-label" htmlFor="customFile">{fileName}</label>
        </div>
        <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
      </form>
    </Fragment>
  )
}

export default FileUpload
