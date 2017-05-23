export class ProfileService {
  profile = {
    needs: '',
    cskills: '',
    motivation: '',
    personality: '',
    lhistory: ''
  }

  getProfile() {
    return this.profile;
  }
}
