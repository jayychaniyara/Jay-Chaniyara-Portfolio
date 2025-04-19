
import { useQuery } from "@tanstack/react-query";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string;
  homepage?: string; 
}

async function fetchGitHubProjects(): Promise<GitHubRepo[]> {
  const response = await fetch('https://api.github.com/users/jayychaniyara/repos?per_page=100');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}

export function useGitHubProjects() {
  return useQuery({
    queryKey: ['github-projects'],
    queryFn: fetchGitHubProjects,
  });
}
