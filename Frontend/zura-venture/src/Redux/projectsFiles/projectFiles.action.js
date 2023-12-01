import {
  FETCH_PROJECTFILES,
  FETCH_PROJECTFILES_FAILURE,
} from "./projectFiles.actionType";

//Get All Project Files
export const fetchProjectFiles = (project_id) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://zura-venture2.onrender.com/projectfile/all/${project_id}`
    );

    const data = await response.json();

    try {
      dispatch({ type: FETCH_PROJECTFILES, payload: data.data });
    } catch (error) {
      dispatch({ type: FETCH_PROJECTFILES_FAILURE, payload: error });
    }
  } catch (error) {
    dispatch({ type: FETCH_PROJECTFILES_FAILURE, payload: error.message });
  }
};

//Get single project file
export const getSingleProjectFile =
  ({ file_name, id }) =>
  async (dispatch) => {
    try {
      await fetch(`https://zura-venture2.onrender.com/projectfile/${id}`, {
        method: "GET",
        body: JSON.stringify({ file_name }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      await dispatch(fetchProjectFiles(id));
    } catch (error) {
      console.error("Error during fetch:", error.message);
    }
  };

//Create ProjectFiles
export const CreateProjectFiles =
  ({ projectFileBody, project_id }) =>
  async (dispatch) => {
    try {
      const response = await fetch(
        "https://gold-wide-eyed-rabbit.cyclic.app/projectfile/add",
        {
          method: "POST",
          body: JSON.stringify(projectFileBody),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        await dispatch(fetchProjectFiles(project_id));
      }
    } catch (error) {
      console.error("Error during fetch:", error.message);
    }
  };



