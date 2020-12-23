import ApiAgent from "./apiAgent";
export default class Contact {
  ID?: string;
  Name: string;
  private static agent: ApiAgent = new ApiAgent();
  private agent: ApiAgent;

  constructor(name: string, id?: string) {
    this.Name = name;
    if (id) this.ID = id;
    this.agent = new ApiAgent();
  }

  static async GetContacts(userID: string) {
    const contacts: Contact[] = [];
    const contactsDTO = await this.agent.getContacts();
    for (const contactDTO of contactsDTO) {
      const contact = new Contact(contactDTO.name, contactDTO.id);
      contacts.push(contact);
    }
    return contacts;
  }
  async DeleteContact() {
    if (!this.ID)
      throw new Error(`Can not delete a contact with no ID assigned.`);

    await this.agent.deleteContact(this.ID);
  }
}
