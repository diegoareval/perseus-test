import {
  donnyObj,
  mattObj,
  miroslavObj,
  rockyObj,
  diegoObj,
} from './constants';
import { IMember, ITeamMemberFacade } from './interfaces';
import { TeamMember } from './team-member';

class TeamMemberFacade implements ITeamMemberFacade {
  private teamInstance: TeamMember;

  constructor() {
    this.teamInstance = TeamMember.getInstance();
    this.addInitialMembers();
    this.updateDates();
  }

  private addInitialMembers() {
    [rockyObj, miroslavObj, donnyObj, mattObj, diegoObj].forEach((member) => {
      this.teamInstance.addMember(member);
    });
  }

  private updateDates() {
    this.teamInstance.getAllMembers().forEach((member) => {
      member.Date = new Date().toLocaleDateString();
    });
  }

  public showActiveRecords() {
    console.log('--- Active Records ---');
    const activeMembers = this.teamInstance
      .getAllMembers()
      .filter((member) => member.Status === 'Active');
    if (activeMembers.length > 0) {
      activeMembers.forEach((member) => {
        console.log(
          `Name: ${member.Name}, Date: ${member.Date}, Favorite Movie: ${member.FavoriteMovie}`,
        );
      });
    } else {
      console.log('No active records found.');
    }
  }

  public sortAndDisplayByProperty(property: keyof IMember) {
    const allMembers = this.teamInstance.getAllMembers();

    const sortedMembers = [...allMembers].sort((a, b) =>
      this.compareMembersByProperty(a, b, property),
    );

    console.log(`--- Sorted Output by ${property} ---`);
    sortedMembers.forEach((member) => {
      console.log(`${property}: ${member[property]}`);
    });
  }

  private compareMembersByProperty(
    a: IMember,
    b: IMember,
    property: keyof IMember,
  ): number {
    const aValue = a[property];
    const bValue = b[property];

    if (aValue === bValue) {
      return 0;
    }
    if (!aValue) {
      return 1;
    }
    if (!bValue) {
      return -1;
    }

    return aValue.localeCompare(bValue);
  }
}

// Show results
const teamFacade = new TeamMemberFacade();
teamFacade.showActiveRecords();
teamFacade.sortAndDisplayByProperty('Name');
teamFacade.sortAndDisplayByProperty('FavoriteFood');
teamFacade.sortAndDisplayByProperty('FavoriteMovie');
