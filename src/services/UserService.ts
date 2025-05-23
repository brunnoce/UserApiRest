import { IUserService, IUserRepository, User } from "@/types/UsersTypes";


export class UserService implements IUserService {
  private userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async createUser(data: User): Promise<User> {
    return this.userRepository.create(data)
  }
  async findUsers(): Promise<User[]> {
    return this.userRepository.find()
  }
  async findUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id)
  }
  async updateUser(id: string, user: Partial<User>): Promise<User | null> {
    return this.userRepository.update(id, user)
  }
  async deleteUser(id: string): Promise<boolean> {
    return this.userRepository.delete(id)
  }

}