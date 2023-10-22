export const createFailedResponse = (message: string) => {
  return { status: 'failed', message };
};

export const createSuccessResponse = (payload: Record<string, any>) => {
  return { status: 'success', ...payload };
};
