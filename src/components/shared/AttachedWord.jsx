function AttachedWord({ children, bgcolor = "#ffbe37", color = null }) {
  return (
    <span className='' style={{
      backgroundColor: bgcolor,
      color: color || 'auto'
    }}>
      {children}
    </span>
  );
}


export default AttachedWord;
