import type { Struct, Schema } from '@strapi/strapi';

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'experience';
  };
  attributes: {
    title: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    workSummery: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'experience.experience': ExperienceExperience;
    }
  }
}
