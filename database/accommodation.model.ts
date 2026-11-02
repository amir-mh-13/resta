import mongoose, { Schema, type InferSchemaType } from "mongoose";

const imageSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    alt: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { _id: false }
);

const locationSchema = new Schema(
  {
    province: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    coordinates: {
      latitude: {
        type: Number,
        min: -90,
        max: 90,
      },
      longitude: {
        type: Number,
        min: -180,
        max: 180,
      },
    },
  },
  { _id: false }
);

const accommodationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    overview: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300,
    },

    type: {
      type: String,
      enum: ["hotel", "villa", "suite", "ecolodge"],
      required: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    images: {
      type: [imageSchema],
      default: [],
    },

    location: {
      type: locationSchema,
      required: true,
    },

    maxGuests: {
      type: Number,
      required: true,
      min: 1,
    },

    bedrooms: {
      type: Number,
      required: true,
      min: 0,
    },

    beds: {
      type: Number,
      required: true,
      min: 1,
    },

    bathrooms: {
      type: Number,
      required: true,
      min: 0,
    },

    amenities: {
      type: [String],
      default: [],
    },

    pricePerNight: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      default: "IRR",
      required: true,
      enum: ["IRR"],
    },

    minNights: {
      type: Number,
      default: 1,
      min: 1,
      required: true,
    },

    checkInTime: {
      type: String,
      required: true,
    },

    checkOutTime: {
      type: String,
      required: true,
    },

    rules: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: ["draft", "pending", "published", "rejected"],
      default: "draft",
      required: true,
    },

    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    reviewCount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export type AccommodationDocument = InferSchemaType<
  typeof accommodationSchema
>;

const Accommodation =
  mongoose.models.Accommodation ||
  mongoose.model("Accommodation", accommodationSchema);

export default Accommodation;