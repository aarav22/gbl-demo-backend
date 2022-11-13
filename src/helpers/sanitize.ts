import pick from 'lodash/pick';

const templates: {
  [key: string]: string[];
} = {
  users: ['user_id', 'role', 'username', 'email', 'name', 'confirmed', 'blocked', 'image', 'created_at', 'updated_at'],
  data: ['case_id', 'case_status', 'reporting_method', 'date', 'time', 'category', 'sub_category', 'priority', 'nature', 'case_mgr', 'case_reporter', 'unread', 'created_at', 'updated_at'],
};

export const sanitizeEntity = (data: unknown, model: string): Partial<unknown> => {
  return pick(data, templates[model]);
};
