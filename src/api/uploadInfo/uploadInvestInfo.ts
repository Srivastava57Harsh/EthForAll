import db from '../../loaders/database';
import { uploadInfoSchema } from './schema';

export default async (req, res): Promise<void> => {
  try {
    const projectInfo = {
      address: req.body.address,
      project: [{
      name: req.body.name,
      version: req.body.version,
      description: req.body.description,
      videoLink: req.body.videoLink,
      investmentGoal: req.body.investmentGoal,
      investmentProgress: req.body.investmentProgress,
      }],
  };

    await uploadInfoSchema.validate(projectInfo);

    let collection = (await db()).collection('projectInfo');
    let existingUser = collection.findOne({ address: projectInfo.address });
    if (existingUser) {
      await collection.updateOne(
        { address: projectInfo.address },
        { $push: { project: projectInfo.project } },
      );
      return res.send('Update successful');
    }
    else{
      await collection.insertOne(projectInfo);
      return res.send('Upload successful');
    }
  } catch (e) {
    console.log(e);
  }
};
