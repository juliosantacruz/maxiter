/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDropzone } from "react-dropzone";
import { SyntheticEvent, useState, useCallback } from "react";
import "./NewPositionForm.scss";

const formDataDefault = {
  title: "",
  job_description: "",
  status: "",
  conclusion: "",
  candidate_files: [],
  job_file: undefined
};

export default function NewPositionForm() {
  const [formData, setFormData] = useState(formDataDefault);
  const [superFile, setFile] = useState()

  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    // console.log(acceptedFiles);
    setFormData({
      ...formData,
      candidate_files: acceptedFiles,
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });


  const setFileTxt =(e:any)=>{
    const file = e?.target.files[0];
    // console.log(file[0])
    setFile(file)
  }


  const onChange = (event: any) => {
    const dato = event?.target.value;

    setFormData({
      ...formData,
      [event.target.name]: dato,
    });
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formdata = new FormData();
    formData.candidate_files.map((lefile, index) => {
      formdata.append("pdfs", lefile );
    });
    formdata.append("position", superFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://maxister.onrender.com/ai/upload-cv", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    // console.log(formData);
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
          {formData.candidate_files &&
            formData.candidate_files.map((leFile, index) => {
              return (
                <p className="fileName" key={index}>
                  {index + 1}.- {(leFile as any).name}
                </p>
              );
            })}
        </div>
        <div className="inputRow">
          <label htmlFor="">Posicion (.txt) </label>
          <input type="file" name="description" onChange={e=>setFileTxt(e)}/>

        </div>
        <button className="submitBtn">Enviar</button>
      </form>
    </div>
  );
}
