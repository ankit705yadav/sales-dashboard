import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Clerk } from '@clerk/clerk-sdk-node';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  private clerk: ReturnType<typeof Clerk>;

  constructor(private configService: ConfigService) {
    this.clerk = Clerk({
      secretKey: this.configService.get<string>('CLERK_SECRET_KEY'),
    });
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing.');
    }

    const token = authHeader.replace('Bearer ', '');
    try {
      // Verify the token using Clerk's SDK
      const claims = await this.clerk.verifyToken(token);
      if (!claims) {
        throw new UnauthorizedException('Invalid token.');
      }
      // You can attach the user's claims to the request if needed
      request.user = claims;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token.');
    }
  }
}
