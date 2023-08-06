import { IMember, ITeamMember } from './interfaces';

/**
 * Represents a team member.
 * @implements {ITeamMember}
 */
export class TeamMember implements ITeamMember {
  /**
   * It is a singleton instance of TeamMember class.
   * @type {TeamMember}
   * @private
   */
  private static instance: TeamMember;

  /**
   * Array to store team members.
   * @type {IMember[]}
   * @private
   */
  private members: IMember[];

  /**
   * Private constructor to initialize the TeamMember instance.
   */
  private constructor() {
    this.members = [];
  }

  /**
   * Get the singleton instance of the TeamMember class.
   * @returns {TeamMember} Of the singleton instance.
   */
  public static getInstance(): TeamMember {
    if (!TeamMember.instance) {
      TeamMember.instance = new TeamMember();
    }
    return TeamMember.instance;
  }

  /**
   * Add a member to the team.
   * @param {IMember} member - The member to be added.
   */
  public addMember(member: IMember) {
    this.members.push(member);
  }

  /**
   * Return all members of the team.
   * @returns {IMember[]} Array of team members.
   */
  public getAllMembers(): IMember[] {
    return this.members;
  }
}
