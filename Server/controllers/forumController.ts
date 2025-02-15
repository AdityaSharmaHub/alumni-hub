import { Request, Response } from "express";
import forumModel from "../models/forumModel";

 
export const createForumPost = async (req: Request, res: Response) => {
  try {
    const { title, content, postedBy, tags } = req.body;

    if (!title || !content || !postedBy) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const newForumPost = new forumModel({
      title,
      content,
      postedBy,
      tags,
    });

    await newForumPost.save();
    res.status(201).json({ success: true, message: "Forum post created successfully", post: newForumPost });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

 
export const getAllForumPosts = async (_req: Request, res: Response) => {
  try {
    const posts = await forumModel.find().sort({ createdAt: -1 }).populate("postedBy", "name");
    res.status(200).json({ success: true, posts });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

 
export const getForumPostById = async (req: Request, res: Response) => {
  try {
    const post = await forumModel.findById(req.params.id).populate("postedBy", "name");
    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    res.status(200).json({ success: true, post });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

 
export const updateForumPost = async (req: Request, res: Response) => {
  try {
    const updatedPost = await forumModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    res.status(200).json({ success: true, message: "Post updated successfully", post: updatedPost });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

 
export const deleteForumPost = async (req: Request, res: Response) => {
  try {
    const deletedPost = await forumModel.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }
    res.status(200).json({ success: true, message: "Post deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
