import { IMember, ITeamMember } from './interfaces';
export class TeamMember implements ITeamMember {
  private static instance: TeamMember;
  private members: IMember[];

  private constructor() {
    this.members = [];
  }

  public static getInstance(): TeamMember {
    if (!TeamMember.instance) {
      TeamMember.instance = new TeamMember();
    }
    return TeamMember.instance;
  }

  public addMember(member: IMember) {
    this.members.push(member);
  }

  public getAllMembers(): IMember[] {
    return this.members;
  }
}
