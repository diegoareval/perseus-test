import { IMember } from './member.interface';

export interface ITeamMemberFacade {
  showActiveRecords(): void;
  sortAndDisplayByProperty(property: keyof IMember): void;
}
