export class ProfileService {
  profile = {
    needs: 'empty',
    cskills: 'empty',
    motivation: 'empty',
    personality: 'empty',
    lhistory: 'empty'
  }

  getProfile() {
    return this.profile;
  }
}
