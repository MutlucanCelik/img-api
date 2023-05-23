import { useState } from "react";

export default function Header({ submit }) {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    submit(value);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <header>
      <form onSubmit={onSubmit} className="img-form">
        <label className="form-label" htmlFor="search">
          Ne tür resimler görmek istersiniz ?
        </label>
        <input value={value} onChange={onChange} type="text" id="search" />
      </form>
    </header>
  );
}
