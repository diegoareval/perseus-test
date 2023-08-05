import { IMember } from './member.interface';

export interface ITeamMember {
  addMember(member: IMember): void;
  getAllMembers(): IMember[];
}
