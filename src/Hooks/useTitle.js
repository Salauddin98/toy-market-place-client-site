import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} || LearnPlayToys `;
  }, [title]);
};

export default useTitle;
