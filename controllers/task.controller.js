import { Task } from "../models/task.model.js";
import { User } from "../models/user.model.js";

 export const createTask = async (req, res) => {
    try {
        const { title, description} = req.body;
        const user = await User.findById(req.user._id);
        if(!user) return res.status(400).json({message: "User does not exist!"});
        const newTask = new Task({ title, description, user: req.user._id});
        const task = await newTask.save();
        res.status(201).json(task);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
 };

 export const getAllTask = async(req, res) => {
    try{
      const tasks = await Task.find({owner: req.user?._id});
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  };


 export const completeTask = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);

      if(!task) return res.status(400).json({message: "Task is not present!"});

      if(task.completed) return res.status(400).json({message: "Task is already completed!"});

      task.completed = true;
      await task.save();

      res.json(task);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  };

  export const editTask = async (req, res) => {
    try {
      const { title, description } = req.body;

      const editedTask = await Task.findByIdAndUpdate(req.params.id, 
        { title, description },
        { new: true },
      );

      if(!editedTask) return res.status(400).json({message: "Task is not present!"});

      res.json(editedTask);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  };

  export const deleteTask = async(req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if(!task) return res.status(400).json({message: "Task is not present!"});

      res.json({message: "Task is deleted."});
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  }; 


  