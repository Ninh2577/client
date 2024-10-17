export interface Tour {
  id: number; // or string depending on your use case
  tenTour: string; // Name of the tour
  url: string; // Video URL
  anh: string; // Image URL or path
  moTa?: string; // Description (optional)
  // Add any other relevant fields
}
