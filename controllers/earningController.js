import Earning from "../models/earningModel.js";

export const getEarnings = async (req, res) => {
  const earnings = await Earning.find();

  res.status(200).json({
    data: earnings,
  });
};

export const createEarning = async (req, res) => {
  const newEarning = req.body;

  const earning = await Earning.create(newEarning);

  res.status(200).json({
    status: "success",
    data: earning,
  });
};

export const updateEarning = async (req, res) => {
  const earning = req.body;
  const id = req.params.id;

  const updatedEarning = await Earning.findByIdAndUpdate(id, earning, {
    new: true,
  });

  res.status(200).json({
    status: "success",
    data: updatedEarning,
  });
};

export const deleteEarning = async (req, res) => {
  const id = req.params.id;

  await Earning.findByIdAndDelete(id);

  res.status(200).json({
    status: "success",
    id,
  });
};
