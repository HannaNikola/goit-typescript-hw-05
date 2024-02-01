import React, { useState, ChangeEvent } from 'react';


interface Form {
  text: string;
}
export function FormComponent() {
  const [value, setValue] = useState<Form>({text: ""});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue({ text: event.target.value });
  };

   return (
    <input type="text" value={value.text} onChange={handleChange} />
  );
}
