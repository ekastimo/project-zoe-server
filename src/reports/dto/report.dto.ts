import { ReportType } from "../enums/report.enum";

export class ReportDto {
  name: string;
  type: ReportType;
  fields: string[];
  columns: string[];
  footer?: string[];
}
