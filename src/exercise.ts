import { donnyObj, mattObj, miroslavObj, rockyObj } from './constants';
import { IMember } from './interfaces';

class TeamMembers {
  private static instance: TeamMembers;
  private members: IMember[];

  private constructor() {
    this.members = [];
  }

  public static getInstance(): TeamMembers {
    if (!TeamMembers.instance) {
      TeamMembers.instance = new TeamMembers();
    }
    return TeamMembers.instance;
  }

  public addMember(member: IMember) {
    this.members.push(member);
  }

  public getAllMembers(): IMember[] {
    return this.members;
  }
}

function addCurrentDateToObject(obj: IMember) {
  obj.Date = new Date().toLocaleDateString();
}

function displayActiveRecords(arr: IMember[]) {
  const activeRecords = arr.filter((member) => member.Status === 'Active');
  if (activeRecords.length > 0) {
    activeRecords.forEach((member) =>
      console.log(
        `Name: ${member.Name}, Date: ${member.Date}, Favorite Movie: ${member.FavoriteMovie}`,
      ),
    );
  } else {
    console.log('No active records found.');
  }
}

function sortOutputByProperty(arr: IMember[], property: keyof IMember) {
  arr.sort((a, b) => {
    const aValue = a[property];
    const bValue = b[property];
    if (aValue && bValue) {
      return aValue.localeCompare(bValue);
    } else if (aValue && !bValue) {
      return -1;
    } else if (!aValue && bValue) {
      return 1;
    }
    return 0;
  });

  console.log(`Sorted result by ${property}:`);
  arr.forEach((item) => {
    console.log(`${property}: ${item[property]}`);
  });
}

const teamMembersInstance = TeamMembers.getInstance();
teamMembersInstance.addMember(rockyObj);
teamMembersInstance.addMember(miroslavObj);
teamMembersInstance.addMember(donnyObj);
teamMembersInstance.addMember(mattObj);

teamMembersInstance.getAllMembers().forEach(addCurrentDateToObject);

console.log('--- Active Records ---');
displayActiveRecords(teamMembersInstance.getAllMembers());

console.log('--- Sorted Output ---');
sortOutputByProperty(teamMembersInstance.getAllMembers(), 'Name');
