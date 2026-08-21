const Formulario = ({ label, icone, erro, children }) => {
  return (
    <div>
      <label className="mb-1 block text-sm text-slate-300">
        {icone ? <span className="mr-2 inline">{icone}</span> : null}
        {label}
      </label>
      {children}
      {erro ? <p className="mt-1 text-xs text-rose-400">{erro}</p> : null}
    </div>
  );
};

export default Formulario;
