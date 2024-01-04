import React, { memo, useEffect, useRef, useCallback } from "react";
import EditorJS, { API } from "@editorjs/editorjs";

interface EditorProps {
  data: any; // Adjust the type according to your data structure
  onChange: (data: any) => void; // Adjust the type according to your onChange handler
  editorblock: string;
}

const Editor: React.FC<EditorProps> = ({ data, onChange, editorblock }) => {
  const editorRef = useRef<EditorJS | null>(null);

  const initializeEditor = useCallback(() => {
    const editor = new EditorJS({
      holder: editorblock,
      data: data,
      onChange: async (api: API, event: any) => {
        const savedData = await api.saver.save();
        onChange(savedData);
      },
    });
    editorRef.current = editor;
  }, []);

  useEffect(() => {
    initializeEditor();

    return () => {
      if (editorRef.current) {
        // Check if the destroy method is available (for Editor.js >= 2.19.0)
        if (editorRef.current.destroy) {
          editorRef.current.destroy();
        }
        editorRef.current = null; // Set it to null to ensure proper cleanup
      }
    };
  }, [initializeEditor]);

  return <div className="border rounded-lg p-4" id={editorblock} />;
};

export default memo(Editor);
