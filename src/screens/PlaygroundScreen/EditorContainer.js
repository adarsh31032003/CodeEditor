import "./EditorContainer.scss"
import Editor from "@monaco-editor/react"


export const EditorContainer = () => {
  return(
    <div className="root-editor-container">
        <div className="editor-header">
          <div className="editor-left-container">
            <b className="title">{"Title of the Card"}</b>
            <span className="material-icons">edit</span>
            <button>Save Code</button>
          </div>
          <div className="editor-right-container">
            <select>
              <option value="cpp">CPP</option>
              <option value="javascript">JavaScript</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
            <select>
              <option value="vs-dark">Vs-Dark</option>
              <option value="vs-light">Vs-Light</option>
            </select>
          </div>
        </div>
        <div className="editor-body">
            <Editor 
                width={200}
                height={200}
                options={{
                  readOnly: false, // Ensure this is set to false
                  selectOnLineNumbers: true,
                }}
            />
        </div>
        <div className="editor-footer">
            <button className="btn">
                <span className="material-icons">fullscreen</span>
                <span>Full Screen</span>
            </button>
            <label htmlFor="import-code" className="btn">
                <span className="material-icons">cloud_upload</span>
                <span>Import Code</span>
            </label>
            <input type="file" id="import-code" style={{display: 'none'}} />
            <button className="btn">
                <span className="material-icons">cloud_download</span>
                <span>Export Code</span>
            </button>
            <button className="btn">
                <span className="material-icons">play_arrow</span>
                <span>Run Code</span>
            </button>
        </div>
    </div>
  );
}