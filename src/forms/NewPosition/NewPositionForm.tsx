/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDropzone } from "react-dropzone";
import { SyntheticEvent, useState, useCallback } from "react";
import './NewPositionForm.scss'

const formDataDefault = {
  title: "",
  job_description: "",
  status: "",
  conclusion: "",
  candidate_files: [],
};

export default function NewPositionForm() {
  const [formData, setFormData] = useState(formDataDefault);

  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    console.log(acceptedFiles)
    setFormData({
      ...formData,
      candidate_files:acceptedFiles
    })
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


  const onChange = (event: any) => {
    const dato = event?.target.value;

    setFormData({
      ...formData,
      [event.target.name]: dato,
    });
  };
  const onAddFiles = (event: any) => {
    const files = event?.target.files;
    console.log(typeof files, files);

    // setFormData({
    //   ...formData,
    //   candidate_files: [...formData.candidate_files, files],
    // });
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="leForm  ">
      <h3>Crear nueva busqueda</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="inputRow">
          <label htmlFor="">Titulo</label>
          <input
            type="text"
            name="title"
            onChange={(event) => onChange(event)}
            value={formData.title}
          />
        </div>
        <div className="inputRow">
          <label htmlFor="">Descripcion de la posicion de trabajo</label>
          <textarea
            name="job_description"
            onChange={(event) => onChange(event)}
            value={formData.job_description}
          ></textarea>
        </div>
        <div className="inputRow">
          <label htmlFor="">Estado</label>
          <input
            type="text"
            name="status"
            onChange={(event) => onChange(event)}
            value={formData.status}
          />
        </div>
        <div className="inputRow">
          <label htmlFor="">Curriculums</label>
          <div {...getRootProps()} className="dragResume">
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
            {
              formData.candidate_files&&
              formData.candidate_files.map((leFile, index)=>{
                return(<p className="fileName" key={index}>{index+1}.- {(leFile as any).name}</p>)
              })
            }
          {/* <input
            type="file"
            name="candidate_files"
            onChange={(event) => onAddFiles(event)}
            value={formData.candidate_files[0]}
          /> */}
        </div>
        <button className="submitBtn">Enviar</button>
      </form>
    </div>
  );
}
