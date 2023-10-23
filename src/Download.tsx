import "./Download.css";

interface DownloadProps {
  text: string;
  setText: Function;
}

export function Download({ text, setText }: DownloadProps) {
  const downloadText = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = getFileName();
    a.click();
  };

  const getFileName = () => {
    const now = new Date();
    const date = `${now.getMonth() + 1}_${now.getDate()}`;
    const time = `${now.getHours()}${now.getMinutes()}`;
    return `morning${date}_${time}.txt`;
  };

  const deleteText = () => {
    setText('');
  }

  return (
    <div id="download">
      <button onClick={downloadText}>Download</button>
      <button onClick={deleteText}>Discard</button>
    </div>
  );
}
