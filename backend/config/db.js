import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose
      .connect("mongodb+srv://cosdp:kdp1234@mflix.slvq0y2.mongodb.net/test")
      .then(() => {
        console.log("DB Connected");
      });
  } catch (error) {
    console.log(error);
  }

  //   console.log("MongoDB URI:", process.env.MONGODB_URI);

  //   try {
  //     const connectionInstance = await mongoose.connect(
  //       `${process.env.MONGODB_URI}/aarambh`
  //     );

  //     console.log(
  //       `/n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
  //     );
  //   } catch (error) {
  //     console.log("MONGODB connetion error ", error);
  //     process.exit(1);
  //   }
};
