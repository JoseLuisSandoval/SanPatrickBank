import { Container } from "inversify";
//import { CreateBankAccountHandler } from "../../Contexts/BankAccount/application/signup/CreateBankAccountHandler";
//import { IBankAccountRepository } from "../Contexts/BankAccount/domain/IBankAccountRepository";
//import { BankAccountRepository } from "../Contexts/BankAccount/infrastructure/BankAccountRepository";
import { IController } from "./controllers/IController";
import CheckStatusController from "./controllers/status/CheckStatusController";
//import { CreateBankAccountController } from "./controllers/BankAccount/CreateBankAccountController";
//import { IRequestHandler } from "src/Contexts/shared/application/IRequestHandler";

export const container = new Container();
container.bind<IController>("CheckStatusController").to(CheckStatusController);
//container.bind<IBankAccountRepository>("BankAccountRepository").to(BankAccountRepository);
//container.bind<IRequestHandler>("CreateBankAccountHandler").to(CreateBankAccountHandler);
//container.bind<IController>("CreateBankAccountController").to(CreateBankAccountController);