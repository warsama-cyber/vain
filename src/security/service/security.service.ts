import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenService } from 'security/jwt/token.service';
import { RefreshTokenPayload, SignInPayload, SignupPayload } from 'security/model/payload';
import { Repository } from 'typeorm';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { configManager } from '@common/config/config.manager';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigKey } from '@common/config/enum/config-key.enum';
import { Token } from 'security/model/entity/Token.entity';
import { Credential } from 'security/model/entity/credential.entity';

@Injectable()
export class SecurityService {
detail(id: any): any {
    throw new Error('Method not implemented.');
}
delete(id: string) {
    throw new Error('Method not implemented.');
}
refresh(payload: RefreshTokenPayload) {
    throw new Error('Method not implemented.');
}
signup(payload: SignupPayload) {
    throw new Error('Method not implemented.');
}
signIn(payload: SignInPayload, arg1: boolean) {
    throw new Error('Method not implemented.');
}
    
constructor(
    @InjectRepository(Credential) private readonly repository: Repository<Credential>,
    private readonly tokenService: TokenService) {
}
}

/*@Module({
imports: [JwtModule.register({
global: true,
secret: configManager.getValue(ConfigKey.JWT_TOKEN_SECRET),
signOptions: {expiresIn: configManager.getValue(ConfigKey.JWT_TOKEN_EXPIRE_IN)},
}), TypeOrmModule.forFeature([Credential, Token])],
exports: [SecurityService],
providers: [SecurityService, TokenService],
controllers: [SecurityController]
})
export class SecurityModule {
}*/
