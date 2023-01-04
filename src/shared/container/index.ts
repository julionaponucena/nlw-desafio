import {container} from 'tsyringe'
import {IUserRepository} from '../../modules/repositories/IUserRepository'
import { UserRepository } from '../../modules/repositories/implementation/UserRepository'
import { ITagRepository } from '../../modules/repositories/ITagRepository'
import { TagRepository } from '../../modules/repositories/implementation/TagRepository'
import { IComplimentsRepository } from '../../modules/repositories/IComplimentsRepository'
import { ComplimentsRepository } from '../../modules/repositories/implementation/ComplimentsRepository'

container.register<IUserRepository>("UserRepository",UserRepository)

container.register<ITagRepository>('TagRepository',TagRepository)

container.register<IComplimentsRepository>('ComplimentRepository',ComplimentsRepository)