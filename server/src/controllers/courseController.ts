import { error } from "console";
import { Request, Response } from "express";
import Course from "../models/courseModel";

export const listCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { category } = req.query;
  try {
    console.log("Fetching Data ---->>");
    const courses =
      category && category !== "all"
        ? await Course.scan("category").eq(category).exec()
        : await Course.scan().exec();
    console.log("------>> Got Data ");
    console.log("Courses: ", courses);

    res.json({ message: "Courses Received Successfully!", data: courses });
  } catch (err) {
    console.log(`Error Happening: ${err}`);
    res.status(500).json({ message: "Error Retrieving courses", error });
  }
};

export const getCourse = async (req: Request, res: Response): Promise<void> => {
  const { courseId } = req.params;
  try {
    const course = await Course.get(courseId);
    if (!course) {
      res.status(404).json({ message: "Course Not Found" });
      return;
    }
    res.json({ message: "Courses Received Successfully!", data: course });
  } catch (err) {
    res.status(500).json({ message: "Error Retrieving course", error });
  }
};
