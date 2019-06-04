﻿namespace Firefly3.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace ClientChapter {

            namespace ClientChapter {
                export const Active: string;
                export const AreaName: string;
                export const BillingChapter: string;
                export const BillingChapter2: string;
                export const ChapterCode: string;
                export const ChapterDesignation: string;
                export const ChapterName: string;
                export const ClientActiveDate: string;
                export const ClientAddressLine1: string;
                export const ClientAddressLine2: string;
                export const ClientAddressLine3: string;
                export const ClientChapterSKey: string;
                export const ClientCity: string;
                export const ClientEmailAddress: string;
                export const ClientEmailAddress2: string;
                export const ClientFax: string;
                export const ClientId: string;
                export const ClientLevel1: string;
                export const ClientLevel2: string;
                export const ClientLevel3: string;
                export const ClientLevel4: string;
                export const ClientName: string;
                export const ClientPhone: string;
                export const ClientState: string;
                export const ClientZip: string;
                export const Commander: string;
                export const Commander2: string;
                export const CommanderLastName: string;
                export const CommanderLastName2: string;
                export const CommanderTitle: string;
                export const CommanderTitle2: string;
                export const CreateDate: string;
                export const CreatedBy: string;
                export const CustomerBillingNumber: string;
                export const Division: string;
                export const EnvelopeClientName: string;
                export const EnvelopeLine1: string;
                export const EnvelopeLine2: string;
                export const EnvelopeLine3: string;
                export const EnvelopeLine4: string;
                export const EnvelopeLine5: string;
                export const FiscalYearBegins: string;
                export const Flex1: string;
                export const Flex2: string;
                export const Flex3: string;
                export const Flex4: string;
                export const Flex5: string;
                export const LastThankYouDate: string;
                export const Lockbox: string;
                export const MdCoord: string;
                export const ModifiedBy: string;
                export const ModifiedDate: string;
                export const MspThank: string;
                export const OldChapterCode: string;
                export const OriginalName: string;
                export const Region: string;
                export const SeedNames: string;
                export const Uw: string;
                export const UwBlackoutFromDate: string;
                export const UwBlackoutToDate: string;
                export const Vertical: string;
                export const WebAddress: string;
            }

            namespace DropDownLookups {
                export const CreateDate: string;
                export const CreatedBy: string;
                export const DropDownField: string;
                export const DropDownLookupsSKey: string;
                export const DropdownSort: string;
                export const DropdownValue: string;
                export const ModifiedBy: string;
                export const ModifiedDate: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    Firefly3['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},ClientChapter:{ClientChapter:{Active:1,AreaName:1,BillingChapter:1,BillingChapter2:1,ChapterCode:1,ChapterDesignation:1,ChapterName:1,ClientActiveDate:1,ClientAddressLine1:1,ClientAddressLine2:1,ClientAddressLine3:1,ClientChapterSKey:1,ClientCity:1,ClientEmailAddress:1,ClientEmailAddress2:1,ClientFax:1,ClientId:1,ClientLevel1:1,ClientLevel2:1,ClientLevel3:1,ClientLevel4:1,ClientName:1,ClientPhone:1,ClientState:1,ClientZip:1,Commander:1,Commander2:1,CommanderLastName:1,CommanderLastName2:1,CommanderTitle:1,CommanderTitle2:1,CreateDate:1,CreatedBy:1,CustomerBillingNumber:1,Division:1,EnvelopeClientName:1,EnvelopeLine1:1,EnvelopeLine2:1,EnvelopeLine3:1,EnvelopeLine4:1,EnvelopeLine5:1,FiscalYearBegins:1,Flex1:1,Flex2:1,Flex3:1,Flex4:1,Flex5:1,LastThankYouDate:1,Lockbox:1,MdCoord:1,ModifiedBy:1,ModifiedDate:1,MspThank:1,OldChapterCode:1,OriginalName:1,Region:1,SeedNames:1,Uw:1,UwBlackoutFromDate:1,UwBlackoutToDate:1,Vertical:1,WebAddress:1},DropDownLookups:{CreateDate:1,CreatedBy:1,DropDownField:1,DropDownLookupsSKey:1,DropdownSort:1,DropdownValue:1,ModifiedBy:1,ModifiedDate:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

