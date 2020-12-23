export default class ApiAgent {
  apiMock = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };
  async getContacts() {
    try {
      await this.apiMock();

      const contactsDTO: any[] = [];

      const contactDTO1 = { name: "Billy Bob", id: "fake-id-1" };
      const contactDTO2 = { name: "William Morris", id: "fake-id-2" };
      const contactDTO3 = { name: "Mother Tharesa", id: "fake-id-3" };

      contactsDTO.push(contactDTO1);
      contactsDTO.push(contactDTO2);
      contactsDTO.push(contactDTO3);
      return contactsDTO;
    } catch (error) {
      throw new Error(`Unable to retrieve contacts from api endpoint.`);
    }
  }
  async getContact(contactID: string) {
    try {
      await this.apiMock();
    } catch (error) {
      throw new Error(`Unable to get contact: ${contactID}`);
    }
  }
  async deleteContact(contactID: string) {
    try {
      await this.apiMock();
    } catch (error) {
      throw new Error(`Unable to delete contact with id: ${contactID}`);
    }
  }
  async updateContact(contactDTO: any) {
    try {
      await this.apiMock();
    } catch (error) {
      throw new Error(
        `Unable to update contact with id: ${contactDTO.contactID}`
      );
    }
  }
  async createContact(contactDTO: any) {
    try {
      await this.apiMock();
    } catch (error) {
      throw new Error(
        `Unable to create contact with id: ${contactDTO.contactID}`
      );
    }
  }
}
