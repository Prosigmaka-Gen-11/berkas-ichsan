import { useState } from "react";

const FormHandle = (state) => {
   const [data, setData] = useState(state)

   const onChangeHandle = (event) =>{
      console.log(event.target.value);
      const dataCopy = {...data};
      dataCopy[event.target.name] = event.target.value;
      setData(dataCopy);
   }

   return {
      data,
      onChangeHandle
   }
}

export default FormHandle;